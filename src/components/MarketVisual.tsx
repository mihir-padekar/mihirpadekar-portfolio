import { motion } from "motion/react"
import "../css/MarketVisual.css"

const candles = [
  { open: 210, close: 330, high: 390, low: 150 },
  { open: 280, close: 220, high: 360, low: 130 },
  { open: 180, close: 300, high: 370, low: 100 },
  { open: 260, close: 390, high: 450, low: 190 },

  { open: 330, close: 250, high: 430, low: 180 },
  { open: 220, close: 350, high: 420, low: 150 },
  { open: 300, close: 470, high: 530, low: 240 },
  { open: 400, close: 320, high: 500, low: 250 },

  { open: 270, close: 350, high: 410, low: 200 },
  { open: 340, close: 260, high: 430, low: 180 },
  { open: 250, close: 370, high: 450, low: 170 },
  { open: 380, close: 300, high: 460, low: 230 },

  { open: 320, close: 440, high: 510, low: 270 },
  { open: 450, close: 350, high: 540, low: 280 },
  { open: 360, close: 500, high: 570, low: 300 },
  { open: 480, close: 390, high: 590, low: 330 },

  { open: 400, close: 540, high: 620, low: 340 },
  { open: 520, close: 430, high: 640, low: 360 },
  { open: 450, close: 570, high: 650, low: 380 },
  { open: 560, close: 470, high: 640, low: 400 },

  { open: 430, close: 590, high: 650, low: 350 },
  { open: 580, close: 490, high: 650, low: 420 },
  { open: 470, close: 610, high: 650, low: 390 },
  { open: 600, close: 510, high: 650, low: 430 },
]

function MarketVisual() {
  const width = 1600
const height = 620

const candleWidth = 42
const spacing = 62

  const minPrice = 80
  const maxPrice = 650

  const scaleY = (price: number) => {
    return (
      height -
      ((price - minPrice) / (maxPrice - minPrice)) * height
    )
  }

  return (
    <motion.div
      className="market-visual"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.4,
        delay: 0.15,
        ease: "easeOut",
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>

          {/* Soft green glow */}
          <filter
            id="candleGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Fade toward bottom */}
          <linearGradient
  id="candleFade"
  x1="0"
  y1="0"
  x2="0"
  y2="1"
>
  <stop
    offset="0%"
    stopColor="#39ff88"
    stopOpacity="0.22"
  />

  <stop
    offset="60%"
    stopColor="#39ff88"
    stopOpacity="0.08"
  />

  <stop
    offset="100%"
    stopColor="#39ff88"
    stopOpacity="0"
  />
</linearGradient>

        </defs>

        {candles.map((candle, index) => {
          const x = 15 + index * spacing

          const openY = scaleY(candle.open)
          const closeY = scaleY(candle.close)
          const highY = scaleY(candle.high)
          const lowY = scaleY(candle.low)

          const bullish = candle.close >= candle.open

          /*
           * Increase body size so the candles
           * feel large like the reference.
           */
          const rawBodyHeight = Math.abs(closeY - openY)

          const bodyHeight = Math.max(
            rawBodyHeight * 2.1,
            42
          )

          const bodyCenter =
            (openY + closeY) / 2

          const bodyTop =
            bodyCenter - bodyHeight / 2

          return (
            <motion.g
              key={index}
              initial={{
                opacity: 0,
                y: 35,
                scaleY: 0.7,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scaleY: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25 + index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: `${x}px ${bodyCenter}px`,
              }}
            >

              {/* Glow behind wick */}
              <line
  x1={x}
  x2={x}
  y1={highY}
  y2={lowY}
  stroke="#39ff88"
  strokeWidth="8"
  strokeOpacity="0.04"
  filter="url(#candleGlow)"
/>

              {/* Main wick */}
              <line
  x1={x}
  x2={x}
  y1={highY}
  y2={lowY}
  stroke="#39ff88"
  strokeWidth="2"
  strokeOpacity="0.22"
/>

              {/* Glow around candle body */}
              <rect
  x={x - candleWidth / 2}
  y={bodyTop}
  width={candleWidth}
  height={bodyHeight}
  rx="4"
  fill="none"
  stroke="#39ff88"
  strokeWidth="8"
  strokeOpacity="0.04"
  filter="url(#candleGlow)"
/>

              {/* Main candle body */}
              <rect
  x={x - candleWidth / 2}
  y={bodyTop}
  width={candleWidth}
  height={bodyHeight}
  rx="3"
  fill={bullish ? "url(#candleFade)" : "transparent"}
  fillOpacity={bullish ? 0.30 : 0}
  stroke="#39ff88"
  strokeWidth="2"
  strokeOpacity="0.20"
/>

            </motion.g>
          )
        })}
      </svg>
    </motion.div>
  )
}

export default MarketVisual