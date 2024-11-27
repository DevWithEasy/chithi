// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDatabase from "@/database/initDB";

export default function handler(req, res) {
  initDatabase()
}
