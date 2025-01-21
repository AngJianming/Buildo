import React from "react";

export default function WhyPuspur() {
  return (
    <div className="w-full">
      <div className="bg-neutral-100 dark:bg-neutral-900 w-full">
        <div className="relative mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
              Why PySpur?
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Built for Engineers
            </h3>
          </div>
          <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
            <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  Deploy anywhere
                </h3>
                <p className="text-foreground">
                  Fully open-source with Apache2 license. Self-host on your own
                  infrastructure. Keep in full control of your data.
                </p>
              </div>
              <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:5]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:6]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:7]"></div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-xs text-neutral-500 mb-2">bash</p>
                  <div className="text-xs overflow-x-auto"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-32 w-full from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
            </div>
            <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  Easy to add your own tools
                </h3>
                <p className="text-foreground">
                  Adding new tools is a matter of simply creating a single
                  Python file.
                </p>
              </div>
              <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-xs text-neutral-500 mb-2">python</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-32 w-full from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
            </div>
            <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  Easy sharing and version control
                </h3>
                <p className="text-foreground">
                  Every agent can be exported as a JSON file. Share with your
                  team, and commit to git.
                </p>
              </div>
              <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:5]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:6]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:7]"></div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-xs text-neutral-500 mb-2">json</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-32 w-full from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
            </div>
            <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  SDKs for TypeScript and Python
                </h3>
                <p className="text-foreground">
                  Integrate with your existing codebase and tools.
                </p>
              </div>
              <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:5]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:6]"></div>
                <div className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:7]"></div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-neutral-900 p-4">
                  <p className="text-xs text-neutral-500 mb-2">python</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-32 w-full from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
