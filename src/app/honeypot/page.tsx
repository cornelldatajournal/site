"use client"

export default function HoneypotPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8 flex flex-col items-center text-center">
      <img className="mb-8" src="https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png"
      />
      <p>
        Thanks for finding the honey pot! We&apos;re trying to find the proportion
        of visitors who are bots, and your IP address has been recorded. If you
        would like to have your data removed from the study email bob28@cornell.edu
        with your request and I&apos;ll address it promptly!
      </p>
    </div>
  );
}