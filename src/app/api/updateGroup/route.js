// pages/api/updateGroup.js

import { getPrisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function PATCH(req) {
  console.log(req);
  if (req.method === 'PATCH') {
    try {
      const body = await req.json();
      console.log("BODY: ", body);
      const { groupId, totalGroupSpendings } = body;
      
      const prisma = getPrisma();
      const updatedGroup = await (await prisma).group.update({
        where: { id: groupId },
        data: { totalSpending: totalGroupSpendings },
      });
      
      return NextResponse.json(updatedGroup, { status: 200 });
    } catch (error) {
      console.error('Error updating group:', error);
      return NextResponse.json({ message: "Error updating group" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
}
