import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  export async function POST(req: Request) {

    try {

        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "512x512" } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!openai.apiKey) {
            return new NextResponse("Open AI API key not configured", { status: 500 });
        }

        if (!prompt) {
            return new NextResponse("Prompt are required", { status: 400 });
        }

        if (!amount) {
            return new NextResponse("Amount are required", { status: 400 });
        }

        if (!resolution) {
            return new NextResponse("Resolution are required", { status: 400 });
        }

        openai.images.generate({
        model: "dall-e-2", 
        prompt, 
        n: parseInt(amount, 10), 
        size: resolution });

        const response = await openai.images.generate({
            model: "dall-e-2", 
            prompt, 
            n: parseInt(amount, 10), 
            size: resolution });
    

        return NextResponse.json(response.data);

    } catch(error) {
        console.log("[IMAGE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
    
  }