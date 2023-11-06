import { PrismaClient } from "@prisma/client"

// Create an object for accessing Prisma globally
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Initialize the Prisma client if it doesn't exist, with optional query logging
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  })

// Set Prisma as a global object for non-production environments
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
