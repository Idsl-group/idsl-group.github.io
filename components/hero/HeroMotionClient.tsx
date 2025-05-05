"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ClientMotionDiv = ({
  children,
  ...props
}: { children: ReactNode } & any) => (
  <motion.div {...props}>{children}</motion.div>
);

export const ClientMotionSpan = ({
  children,
  ...props
}: { children: ReactNode } & any) => (
  <motion.span {...props}>{children}</motion.span>
);

export const ClientMotionH1 = ({
  children,
  ...props
}: { children: ReactNode } & any) => (
  <motion.h1 {...props}>{children}</motion.h1>
);

export const ClientMotionP = ({
  children,
  ...props
}: { children: ReactNode } & any) => <motion.p {...props}>{children}</motion.p>;

export const ClientMotionA = ({
  children,
  ...props
}: { children: ReactNode } & any) => <motion.a {...props}>{children}</motion.a>;
