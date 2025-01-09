'use client'

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Confetti from 'react-confetti';

interface PaymentSuccessUIProps {
  type: string;
  planName: string;
  price: string;
  features: string[];
  expiryDate: string;
}

export default function PaymentSuccess({ type, planName, price, features, expiryDate }: PaymentSuccessUIProps) {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowDimensions({ width, height });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={false}
        numberOfPieces={200}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-center"
        >
          Payment Successful!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl font-semibold">You've been upgraded to</p>
          <p className="text-3xl font-bold text-green-400 mt-2">
            {planName}
          </p>
          <p className="text-gray-400 mt-1">
            ₹ {price} / {'month'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center space-x-2 text-yellow-300 mt-0 h-5"
        >
          <Calendar className="w-5 h-5" />
          <span>Expires on: {expiryDate}</span>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 space-y-2"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className=''>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8"
        >
          <Link href="/dashboard" passHref>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Go to Dashboard
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
