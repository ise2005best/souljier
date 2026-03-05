import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const API_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}.myshopify.com/admin/api/2025-07/graphql.json`;
    const API_TOKEN = process.env.PRIVATE_ACCESS_TOKEN;
    console.log("TOKEN:", API_TOKEN);
    console.log("STORE:", process.env.SHOPIFY_STORE_DOMAIN);
    const requestBody = await request.json();

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": API_TOKEN!,
            },
            body: JSON.stringify(requestBody),
        });


        if (!response.ok) {
            console.error(response)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return NextResponse.json(data);
    }
    catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}