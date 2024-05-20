// import axios from 'axios'
import { useState } from 'react'
import { Octokit } from "@octokit/core";
import { z } from 'zod'

const GithubUser = z.object({
    name: z.string(),
    login: z.string(),
    avatar_url: z.string(),
    bio: z.string(),
    created_at: z.coerce.date(),
    public_repos: z.number(),
    followers: z.number(),
    following: z.number(),
    location: z.string(),
    blog: z.string(),
    twitter_username: z.string(),
    company: z.string(),
})

type GithubUser = z.infer<typeof GithubUser>

const initialState = {
    name: '',
    login: '',
    avatar_url: '',
    bio: '',
    created_at: new Date,
    public_repos: 0,
    followers: 0,
    following: 0,
    location: '',
    blog: '',
    twitter_username: '',
    company: '',
}

export const useSearchUser = () => {
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [user, setUser] = useState<GithubUser>(initialState)
    const fetchGithubUser = async (user: string) => {
        try {
            setLoading(true)
            setUser(initialState)
            const octokit = new Octokit({
                auth: import.meta.env.VITE_AUTH_KEY
            })

            const { data } = await octokit.request(`GET /users/${user}`, {
                username: `${user}`,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            console.log(data)
            if (!data[0]) {
                setNotFound(true)
                return
            }
            const { data: githubUserResponse } = await octokit.request(`GET /users/${user}`, {
                username: `${user}`,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            const result = GithubUser.safeParse(githubUserResponse)
            if (result.success) {
                console.log(result)
            } else {
                console.log('Respuesta mal formada')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
            console.log(loading)
        }
    }

    return {
        loading,
        notFound,
        user,
        fetchGithubUser,
    }
}

