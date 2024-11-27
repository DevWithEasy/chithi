import initDatabase from "@/database/initDB";

export default async function handler(req, res) {
    initDatabase()
    try {
        console.log(req)
    } catch (error) {
        console.log(error)
    }
}