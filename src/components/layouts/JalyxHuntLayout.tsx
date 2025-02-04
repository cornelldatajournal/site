"use client"
import React from 'react';
import { Article } from '@/types';
import Image from 'next/image';
import { PlotLoader } from '../plots/PlotLoader';

interface JalyxHuntLayoutProps {
  article: Article;
  children: React.ReactNode;
}

export function JalyxHuntLayout({ article, children }: JalyxHuntLayoutProps) {
  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="w-full max-w-6xl flex flex-col items-start text-left mb-4">
        <h1 className="text-5xl font-bold text-black">Cornell's <span className="text-green-600">Jalyx Hunt</span> is Playing in Super Bowl</h1>
        <p className="text-lg font-semibold mt-2">Here's everything you need to know about him:</p>
      </header>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-3 gap-8 mt-0">
        {/* Column 1: Line Plot, Player Image and Info */}
        <div className="flex flex-col gap-6 -mt-4">
          {/* Line Plot */}
          <div className="w-full">
            <PlotLoader plotId="jalyx-hunt-line-plot" className="w-full" colors={['#90ee90', '#006400']} />
          </div>

          {/* Player Image and Info */}
          <div className="flex flex-col mt-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={`/${("public/images/hunt.png").replace('public/', '')}`}
                  alt="Jalyx Hunt"
                  width={200}
                  height={100}
                />
              </div>
              <div className="min-w-[240px]">
                <div className="flex space-x-4 mb-4">
                  <Image
                    src={`/${("public/images/Cornell_Big_Red_logo.png").replace('public/', '')}`}
                    alt="Cornell University Logo"
                    width={80}
                    height={80}
                  />
                  <Image
                    src={`/${("public/images/philadelphia_eagles.png").replace('public/', '')}`}
                    alt="Philadelphia Eagles Logo"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold">Jalyx Hunt</p>
                  <p className="text-md">Outside Linebacker | #58</p>
                  <p className="text-md">Height: 6'3" Weight: 252 lbs</p>
                  <p className="text-md">DOB: March 13, 2001</p>
                  <p className="text-md">94th Overall Pick | Round 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Table and Scatter Plot */}
        <div className="col-span-2 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8 ml-0">
            {/* Table */}
            <div className="w-full">
              <PlotLoader plotId="jalyx-hunt-table" className="w-full" />
            </div>

            {/* Column 3: Roseman Quote and Image */}
            <div className="flex flex-col gap-4">
              <div className="bg-white p-2 rounded-lg shadow-md border border-gray-300">
                <p className="text-sm italic text-center">"Extremely smart kid, coming from Cornell"</p>
              </div>
              <Image
                src={`/${("public/images/roseman.png").replace('public/', '')}`}
                alt="Howie Roseman"
                width={300}
                height={100}
              />
              <div className="bg-white p-2 rounded-lg shadow-md border border-gray-300">
                <p className="font-bold text-center">Howie Roseman</p>
                <p className="text-xs text-center">General Manager of the Philadelphia Eagles</p>
              </div>
            </div>
          </div>

          {/* Scatter Plot */}
          <div className="mx-40 w-4/5">
            <PlotLoader plotId="jalyx-hunt-scatter-plot" className="w-full" colors={['#006400']}/>
          </div>
        </div>
      </div>

      {/* Main content from children */}
      <div className="w-full max-w-6xl mt-8">
        {children}
      </div>
    </div>
  );
}