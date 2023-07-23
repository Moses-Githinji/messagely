import prisma from "@/app/libs/prismadb";

async function getMessages(conversationId: string) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        id: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages;
  } catch (error: any) {
    return [];
  }
}

export default getMessages;
