import Head from "next/head";
import { Button } from "@mantine/core";
import Link from "next/link";
import VeryImportant from "@/components/molecules/VeryImportant";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>Cph Business Booking</h1>
          <Link href="/login">
            <Button variant="light" color="orange">
              Login
            </Button>
          </Link>
        </header>
        <VeryImportant />
      </main>
    </>
  );
}
