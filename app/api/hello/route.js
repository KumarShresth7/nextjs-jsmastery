export async function GET(request){
    const users = [
        {id:1,Name:"Shresth"},
        {id:2,Name:"Rohan"}
    ] 
    return new Response(JSON.stringify(users))
}