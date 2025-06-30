"use client";

import { useApp } from "@/app/_contexts/AppContext";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroBackgroundSVG() {
  const { isDarkMode } = useApp();

  return (
    <AnimatePresence mode="wait">
      {!isDarkMode && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 400"
          className="absolute inset-0 w-full h-full -z-10"
          key="light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="gradient1"
              x1="636.123"
              x2="1627.784"
              y1="-106.316"
              y2="885.344"
              gradientTransform="rotate(-135.001 1475.523 608.836) scale(2.2067 .4227)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset=".061" stopColor="#fcfcfc" />
              <stop offset=".335" stopColor="#f5f5f5" />
              <stop offset="1" stopColor="#f3f3f3" />
            </linearGradient>
            <linearGradient
              id="gradient2"
              x1="704.653"
              x2="1592.214"
              y1="-741.38"
              y2="146.181"
              gradientTransform="matrix(-.6599 2.0553 -.5598 -.1797 1247.255 -2413.855)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#f5f5f5" />
            </linearGradient>
            <linearGradient
              id="gradient3"
              x1="727.33"
              x2="1350.389"
              y1="697.373"
              y2="1320.432"
              gradientTransform="rotate(-135 1462.968 678.57) scale(2.1233 .6071)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f1f1f1" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="gradient4"
              x1="863.375"
              x2="1116.192"
              y1="291.416"
              y2="544.232"
              gradientTransform="rotate(-135 1355.098 633.886) scale(2.236 .6071)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f0f0f0" />
              <stop offset=".105" stopColor="#f6f6f6" />
              <stop offset=".342" stopColor="#fdfdfd" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="gradient5"
              x1="1004.093"
              x2="1444.78"
              y1="-507.072"
              y2="-66.385"
              gradientTransform="rotate(135.001 1425.802 -410.904) scale(2.2367 .7061)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset=".463" stopColor="#fbfbfb" />
              <stop offset=".892" stopColor="#f0f0f0" />
              <stop offset="1" stopColor="#ececec" />
            </linearGradient>
            <linearGradient
              id="gradient6"
              x1="929.611"
              x2="1224.912"
              y1="-838.284"
              y2="-542.983"
              gradientTransform="matrix(.5757 2.1517 -.4084 .1092 -136.734 -2042.527)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f3f3f3" />
              <stop offset=".423" stopColor="#fbfbfb" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="gradient7"
              x1="849.795"
              x2="1200.75"
              y1="-1268.591"
              y2="-917.636"
              gradientTransform="rotate(134.999 1614.028 -400.958) scale(2.2284 .4227)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset=".536" stopColor="#fbfbfb" />
              <stop offset="1" stopColor="#f1f1f1" />
            </linearGradient>
            <linearGradient
              id="gradient8"
              x1="926.677"
              x2="1224.094"
              y1="-1423.581"
              y2="-1126.164"
              gradientTransform="rotate(135 1542.832 -371.464) scale(2.2616 .4227)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset=".35" stopColor="#f8f8f8" />
              <stop offset="1" stopColor="#f0f0f0" />
            </linearGradient>
          </defs>

          <path d="M0 0h877L0 400z" fill="url(#gradient1)" />
          <path
            d="M0 0h877L0 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite",
              opacity: 0.08,
            }}
          />

          <path d="M612 400 152 0h1008L840 400z" fill="url(#gradient2)" />
          <path
            d="M612 400 152 0h1008L840 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.2s",
              opacity: 0.08,
            }}
          />

          <path d="M1280 0v400H502z" fill="url(#gradient3)" />
          <path
            d="M1280 0v400H502z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.4s",
              opacity: 0.08,
            }}
          />

          <path d="m199 0 760 400H801L0 192V78z" fill="url(#gradient4)" />
          <path
            d="m199 0 760 400H801L0 192V78z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.6s",
              opacity: 0.08,
            }}
          />

          <path d="M0 400 877 0 585 400z" fill="url(#gradient5)" />
          <path
            d="M0 400 877 0 585 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.8s",
              opacity: 0.08,
            }}
          />

          <path d="M533 0h216l249 400z" fill="url(#gradient6)" />
          <path
            d="M533 0h216l249 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 1s",
              opacity: 0.08,
            }}
          />

          <path d="M1086 0h194v233l-265 167z" fill="url(#gradient7)" />
          <path
            d="M1086 0h194v233l-265 167z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 1.2s",
              opacity: 0.08,
            }}
          />

          <path d="m866 400 414-167-152 167z" fill="url(#gradient8)" />
          <path
            d="m866 400 414-167-152 167z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 1.4s",
              opacity: 0.08,
            }}
          />
        </motion.svg>
      )}
      {isDarkMode && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 400"
          className="absolute inset-0 w-full h-full -z-10"
          key="dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="gradient1"
              x1="636.123"
              x2="1627.784"
              y1="-106.316"
              y2="885.344"
              gradientTransform="rotate(-135.001 1475.523 608.836) scale(2.2067 .4227)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#333" />
              <stop offset=".061" stopColor="#2b2b2b" />
              <stop offset=".335" stopColor="#222" />
              <stop offset="1" stopColor="#1a1a1a" />
            </linearGradient>

            <linearGradient
              id="gradient2"
              x1="704.653"
              x2="1592.214"
              y1="-741.38"
              y2="146.181"
              gradientTransform="matrix(-.6599 2.0553 -.5598 -.1797 1247.255 -2413.855)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#333" />
              <stop offset="1" stopColor="#1a1a1a" />
            </linearGradient>

            <linearGradient
              id="gradient3"
              x1="727.33"
              x2="1350.389"
              y1="697.373"
              y2="1320.432"
              gradientTransform="rotate(-135 1462.968 678.57) scale(2.1233 .6071)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1e1e1e" />
              <stop offset="1" stopColor="#333" />
            </linearGradient>

            <linearGradient
              id="gradient4"
              x1="863.375"
              x2="1116.192"
              y1="291.416"
              y2="544.232"
              gradientTransform="rotate(-135 1355.098 633.886) scale(2.236 .6071)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#222" />
              <stop offset=".105" stopColor="#2a2a2a" />
              <stop offset=".342" stopColor="#333" />
              <stop offset="1" stopColor="#3b3b3b" />
            </linearGradient>

            <linearGradient
              id="gradient5"
              x1="1004.093"
              x2="1444.78"
              y1="-507.072"
              y2="-66.385"
              gradientTransform="rotate(135.001 1425.802 -410.904) scale(2.2367 .7061)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#333" />
              <stop offset=".463" stopColor="#2a2a2a" />
              <stop offset=".892" stopColor="#222" />
              <stop offset="1" stopColor="#1a1a1a" />
            </linearGradient>

            <linearGradient
              id="gradient6"
              x1="929.611"
              x2="1224.912"
              y1="-838.284"
              y2="-542.983"
              gradientTransform="matrix(.5757 2.1517 -.4084 .1092 -136.734 -2042.527)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#222" />
              <stop offset=".423" stopColor="#2b2b2b" />
              <stop offset="1" stopColor="#333" />
            </linearGradient>

            <linearGradient
              id="gradient7"
              x1="849.795"
              x2="1200.75"
              y1="-1268.591"
              y2="-917.636"
              gradientTransform="rotate(134.999 1614.028 -400.958) scale(2.2284 .4227)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#333" />
              <stop offset=".536" stopColor="#2b2b2b" />
              <stop offset="1" stopColor="#1e1e1e" />
            </linearGradient>

            <linearGradient
              id="gradient8"
              x1="926.677"
              x2="1224.094"
              y1="-1423.581"
              y2="-1126.164"
              gradientTransform="rotate(135 1542.832 -371.464) scale(2.2616 .4227)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#333" />
              <stop offset=".35" stopColor="#292929" />
              <stop offset="1" stopColor="#222" />
            </linearGradient>
          </defs>

          <path d="M0 0h877L0 400z" fill="url(#gradient1)" />
          <path
            d="M0 0h877L0 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite",
              opacity: 0.08,
            }}
          />

          <path d="M612 400 152 0h1008L840 400z" fill="url(#gradient2)" />
          <path
            d="M612 400 152 0h1008L840 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.2s",
              opacity: 0.08,
            }}
          />

          <path d="M1280 0v400H502z" fill="url(#gradient3)" />
          <path
            d="M1280 0v400H502z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.4s",
              opacity: 0.08,
            }}
          />

          <path d="m199 0 760 400H801L0 192V78z" fill="url(#gradient4)" />
          <path
            d="m199 0 760 400H801L0 192V78z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.6s",
              opacity: 0.08,
            }}
          />

          <path d="M0 400 877 0 585 400z" fill="url(#gradient5)" />
          <path
            d="M0 400 877 0 585 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 0.8s",
              opacity: 0.08,
            }}
          />

          <path d="M533 0h216l249 400z" fill="url(#gradient6)" />
          <path
            d="M533 0h216l249 400z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 1s",
              opacity: 0.08,
            }}
          />

          <path d="M1086 0h194v233l-265 167z" fill="url(#gradient7)" />
          <path
            d="M1086 0h194v233l-265 167z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 1.2s",
              opacity: 0.08,
            }}
          />

          <path d="m866 400 414-167-152 167z" fill="url(#gradient8)" />
          <path
            d="m866 400 414-167-152 167z"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeDasharray="40 200"
            style={{
              strokeDashoffset: 0,
              animation: "trace 1s linear infinite 1.4s",
              opacity: 0.08,
            }}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}
