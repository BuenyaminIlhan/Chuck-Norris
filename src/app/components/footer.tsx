"use client"
/* eslint-disable @next/next/no-async-client-component */
import { prisma } from "../server/prisma";

export default async function Footer() {
    const count = await prisma.visitors.findMany()
    let lastVisitor = count[count.length - 1];

    async function newVisitor() {

        if (!lastVisitor) {
            const res = await prisma.visitors.create({
                data: {
                    counter: 1,
                },
            });
        }
        const newCounter = lastVisitor.counter + 1;
        const res = await prisma.visitors.create({
            data: {
                counter: newCounter,
            },
        });
    }
    newVisitor()

    return (
        <>
            <div>
                {lastVisitor && lastVisitor.counter !== undefined ? (
                    <h2 className="text-white text-lg m-12">Visitors: {lastVisitor.counter}</h2>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}
