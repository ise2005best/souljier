import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const API_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}.myshopify.com/api/2025-01/graphql.json`;
   
    const requestBody = await request.json();
    const token = process.env.SHOPIFY_STOREFRONT_API

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Shopify-Storefront-Private-Token": token!,
            },
            body: JSON.stringify(requestBody),
        });


        if (!response.ok) {
            console.error(response)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)

        return NextResponse.json(data);
    }
    catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}