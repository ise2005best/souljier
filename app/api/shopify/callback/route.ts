export async function GET(req: Request) {
    const url = new URL(req.url);
  
    const code = url.searchParams.get("code");
    const shop = url.searchParams.get("shop");
  
    if (!code || !shop) {
      return new Response("Missing params", { status: 400 });
    }
  
    const response = await fetch(
      `https://${shop}/admin/oauth/access_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: process.env.SHOPIFY_CLIENT_ID,
          client_secret: process.env.SHOPIFY_CLIENT_SECRET,
          code
        })
      }
    );
  
    const data = await response.json();
  
    console.log("ACCESS TOKEN:", data.access_token);
  
    return new Response("App installed successfully");
  }