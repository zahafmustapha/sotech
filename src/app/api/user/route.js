import {db} from '../../../../lib/db.js'
import {NextResponse} from 'next/server'



export async function POST(req){

  const {name} = await req.json()
  const res = await db.user.create({
    data:{
       name
    }
  })

  return NextResponse.json(res)
}


export async function GET(req){


  const { name } = await req.json()
  console.log(name)
  const res = await db.user.findMany({
    where : {
      name : name,
    },
  })

  if (!res){
    return new Response('Not found', {status : 404})
  }

  return NextResponse.json(res)
  
}

export async function DELETE(req){

  const {name} = await req.json()
  const res = await db.user.deleteMany({
    where: {
      name: name,
    },
  });
  if (!res){
    return new Response('Not found', {status : 404})
  }

  return NextResponse.json(res)
}

export async function UPDATE(req){

  const {name} = await req.json()
  const res = await db.user.updateMany({

    where: {
      name: 'Ahmed',
    },
    data: {
      id:'yjygvblyftrgugyg'
    },
  })
  if (!res){
    return new Response('Not found', {status : 404})
  }

  return NextResponse.json(res)
}