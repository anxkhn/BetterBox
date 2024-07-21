"use client";
import { useState } from "react";
import Link from "next/link";
import DeleteComponenet from "./delete-component";
import BlurredSalaryComponent from "./salary";
import SideBySide from "./sidebyside";

export function Component() {
  const [isModalOpen, setIsModalOpen] = useState({ filter: false, learnMore: false });

  const openModal = (modalType: any) => setIsModalOpen({ ...isModalOpen, [modalType]: true });
  const closeModal = () => setIsModalOpen({ filter: false, learnMore: false });

  const handleLinkClick = (event: any, modalType: any) => {
    event.preventDefault(); // Prevent default link behavior
    openModal(modalType);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">BetterBox</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Unlock Salary Data with BetterBox</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Easily unblur salaries on AmbitionBox without signing in, and block annoying popups and distractions with our filter list.
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-center min-[400px]:flex-row">
                  <Link
                    href="#unlock"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Install Bookmarket
                  </Link>

                  <Link
                    href="#filter"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Install Adblock Filter
                  </Link>
                </div>
              </div>
              <SideBySide />
            </div>
          </div>
        </section>
        <section id="unlock" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unblur Salaries</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our bookmarklet allows you to easily unblur salaries without having to sign in on AmbitionBox. No more forced logins.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Unblur salaries with a single click
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    No account or sign-in required
                  </li>
                </ul>
                <div className="flex flex-col gap-2 items-center min-[400px]:flex-row">
                  <Link
                    href="javascript:(function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    var style = window.getComputedStyle(element);
    if (style.filter.includes('blur')) {
      element.style.filter = style.filter.replace(/blur\([^\)]+\)/g, 'blur(0px)');
    }
  });
})();
"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Use BetterBox
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    onClick={(event) => handleLinkClick(event, "learnMore")}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <BlurredSalaryComponent />
            </div>
          </div>
        </section>
        <section id="filter" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <DeleteComponenet />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Block Annoying Popups</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Say goodbye to annoying popups and forced signups with our powerful ad blocker filter list.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Customizable filter list
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Works with UBlock Origin, AdBlockPlus and more.
                  </li>
                </ul>
                <div className="flex flex-col gap-2 items-center min-[400px]:flex-row">
                  <Link
                    href="https://subscribe.adblockplus.org/?location=https%3A%2F%2Fraw.githubusercontent.com%2Fanxkhn%2FBetterBox%2Fmain%2Ffilters%2Fbetterbox-filterlist.txt&title=anxkhn%27s%20betterbox%20filterlist"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Install Filterlist
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    onClick={(event) => handleLinkClick(event, "filter")}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Take Control of Your Job Search
                </h2>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  With BetterBox, you can have a better experience on Ambition Box Platform and it you can make more informed decisions about your
                  career and negotiate better compensation. Focus on what really matters.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Modals */}
        {isModalOpen.filter && (
          <Modal>
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                <XIcon className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold">Filterlist Details</h2>
              <p>Here you can include details about the filterlist feature.</p>
            </div>
          </Modal>
        )}
        {isModalOpen.learnMore && (
          <Modal>
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                <XIcon className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold">Learn More</h2>
              <p>Here you can include more information about the Learn More feature.</p>
            </div>
          </Modal>
        )}
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 BetterBox. @anxkhn </p>
      </footer>
    </div>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M23 17.91C23.02 18.66 22.82 19.37 22.46 19.98C22.26 20.34 21.99 20.6701 21.69 20.9401C21 21.5801 20.09 21.9701 19.08 22.0001C17.62 22.0301 16.33 21.2801 15.62 20.1301C15.24 19.5401 15.01 18.8301 15 18.0801C14.97 16.8201 15.53 15.6801 16.43 14.9301C17.11 14.3701 17.97 14.0201 18.91 14.0001C21.12 13.9501 22.95 15.7 23 17.91Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17.44 18.03L18.45 18.99L20.54 16.97" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3.17004 7.43994L12 12.5499L20.77 7.46991" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 21.6099V12.5399" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.92999 21.52L4.59 18.56C3.38 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38 6.11002 4.59 5.44002L9.92999 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function Modal({ children: children }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
    </div>
  );
}
