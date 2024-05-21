import { useState } from 'react'
import { Octokit } from "@octokit/core";
import { User } from '../types';
// import { z } from 'zod'

// const GithubUserSchema = z.object({
//     login: z.string(),
//     avatar_url: z.string(),
//     name: z.string(),
//     company: z.string(),
//     blog: z.string(),
//     location: z.string(),
//     bio: z.string(),
//     twitter_username: z.string(),
//     public_repos: z.number(),
//     followers: z.number(),
//     following: z.number(),
//     created_at: z.string(),
// })

// export type GithubUser = z.infer<typeof GithubUserSchema>

const initialState = {
    name: "The Octocat",
    login: "octocat",
    avatar_url: "src/assets/octocat.png",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    created_at: "2021-06-26T00:05:46Z",
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "",
    blog: "",
    twitter_username: "",
    company: "",
}

export const useSearchUser = () => {
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [user, setUser] = useState<User>(initialState)
    const fetchGithubUser = async (user: string) => {
        try {
            setLoading(true)
            setUser(initialState)
            const octokit = new Octokit({
                auth: import.meta.env.VITE_AUTH_KEY
            })

            const {data} = await octokit.request(`GET /users/${user}`, {
                username: `${user}`,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            console.log(data)

            // const result = GithubUserSchema.safeParse(data)
            if(data) {
                setUser(data)
                console.log("Hay datos")
                setNotFound(false)
            } else {
                setNotFound(true)
            }
        } catch (error) {
            setNotFound(true)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        notFound,
        user,
        fetchGithubUser,
    }
}

