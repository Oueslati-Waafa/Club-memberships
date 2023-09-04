import React from "react";
import BlogSection from "../../components/BlogSection/BlogSection";
import HomeSection from "../../components/HomeSection/HomeSection";
import RegisterForm from "../../components/RegisterFrom/RegisterForm";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <RegisterForm />
      <WelcomeSection />
      <BlogSection />
    </>
  );
}
