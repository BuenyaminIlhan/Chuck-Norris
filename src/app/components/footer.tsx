/* eslint-disable @next/next/no-async-client-component */
import { prisma } from "../server/prisma";

export default async function Footer() {
    // Fetch visitor count data from the Prisma database
    const count = await prisma.visitors.findMany()
    let lastVisitor = count[count.length - 1];
    if (count.length == 0) {
        firstVisitor()
    } else {
        newVisitor()
    }

    // Define an asynchronous function to create a new visitor entry
    async function firstVisitor() {

        if (!lastVisitor) {
            const res = await prisma.visitors.create({
                data: {
                    counter: 1,
                },
            });
        }
    }

    // Otherwise, increment the counter and create a new visitor entry
    async function newVisitor() {
        const newCounter = lastVisitor.counter + 1;
        const res = await prisma.visitors.create({
            data: {
                counter: newCounter,
            },
        });
    }

    // Call the newVisitor function to create or update visitor entries


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
