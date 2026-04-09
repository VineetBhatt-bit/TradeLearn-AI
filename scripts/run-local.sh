#!/bin/zsh

set -e

ROOT_DIR="/Users/vineetbhatt/Documents/TradeLearn-AI"

cleanup() {
  kill 0 >/dev/null 2>&1 || true
}

trap cleanup EXIT INT TERM

cd "$ROOT_DIR/backend/api"
npm run dev &

cd "$ROOT_DIR/frontend"
npm run dev &

wait
