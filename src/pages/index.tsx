import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { QrCodeIcon } from "@/components/ui/icons";

export function Component() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-white px-6 lg:px-12 shadow-sm transition-all">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage
              alt="Aedotris"
              src="https://i.ibb.co/QnnHWWW/IMG-8490.jpg"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Aedotris</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-4 lg:hidden">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full" size="icon" variant="outline">
                <QrCodeIcon className="h-6 w-6" />
                <span className="sr-only">Donate QR Code</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[300px] p-6">
              <DialogHeader>
                <DialogTitle>Donate QR Code</DialogTitle>
                <DialogDescription>
                  Scan this QR code to donate to my project.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center">
                <img
                  alt="Donate QR Code"
                  className="rounded-lg"
                  height={200}
                  src="https://img.vietqr.io/image/MB-0905243477-print.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                />
              </div>
            </DialogContent>
          </Dialog>
        </nav>
        <nav className="hidden lg:flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full" size="icon" variant="outline">
                <QrCodeIcon className="h-6 w-6" />
                <span className="sr-only">Donate QR Code</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[300px] p-6">
              <DialogHeader>
                <DialogTitle>Donate QR Code</DialogTitle>
                <DialogDescription>
                  Scan this QR code to donate to my project.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center">
                <img
                  alt="Donate QR Code"
                  className="rounded-lg"
                  height={200}
                  src="https://img.vietqr.io/image/MB-0905243477-print.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                />
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="container mx-auto grid max-w-3xl gap-8 px-6 py-12 md:px-12 lg:py-20">
          <div className="grid gap-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hello, I am Aedotris
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              I am a passionate software engineer with a strong background in
              full-stack development. I specialize in building scalable and
              user-friendly web applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <a className="group" href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200   dark:group-hover:bg-gray-700">
                <GithubIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </a>
            <a className="group" href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200   dark:group-hover:bg-gray-700">
                <LinkedinIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </a>
            <a className="group" href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200   dark:group-hover:bg-gray-700">
                <TwitterIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </a>
            <a className="group" href="#">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200   dark:group-hover:bg-gray-700">
                <MailIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </a>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I am a passionate software engineer with a strong background in
                full-stack development. I specialize in building scalable and
                user-friendly web applications using the latest technologies and
                best practices.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">My Skills</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-gray-100 p-4 text-center  ">
                  <ComponentIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm font-medium">React</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center  ">
                  <NetworkIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm font-medium">Node.js</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center  ">
                  <TypeIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm font-medium">TypeScript</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center  ">
                  <DatabaseIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm font-medium">PostgreSQL</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center  ">
                  <ContainerIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm font-medium">Docker</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <ContainerIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm font-medium">Kubernetes</p>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">My Projects</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100">
                  <h3 className="text-lg font-semibold">Project 1</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A full-stack web application built with React, Node.js, and
                    PostgreSQL.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100">
                  <h3 className="text-lg font-semibold">Project 2</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A mobile-first web application built with React Native and
                    Firebase.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 ">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Aedotris. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

interface IconProps {
  className?: string;
}

function ComponentIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function ContainerIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  );
}

function DatabaseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GithubIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function NetworkIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function QrCodeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

export default Component;
