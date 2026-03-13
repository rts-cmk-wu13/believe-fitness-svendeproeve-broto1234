import SignupFrom from "@/components/signupForm";

export default function SignupPage() {
  return (
    <section className="px-4 mt-12 mb-4">
      <h1 className="text-xs font-semibold mb-4">Sign up as a new user</h1>
      <SignupFrom />
    </section>
  );
}