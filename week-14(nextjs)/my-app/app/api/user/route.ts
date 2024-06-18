import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    // extract body
    const body = await req.json();
    console.log(body)
    return Response.json({
        message: "Logged in successful"
    })
}
