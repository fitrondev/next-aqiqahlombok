// import { createUserWithAccount, getUserByEmail } from "@/utils/user"; // Import user-related utilities
import prisma from "@/lib/db";
import bcrypt from "bcrypt"; // Import bcryptjs instead of bcrypt
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = await req.json();

    // Check if the email already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already in use.",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Salt round of 10

    // Create the new user if the email doesn't exist
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      { status: 500 }
    );
  }
};
