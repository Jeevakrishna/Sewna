import { SplitZone } from "./SplitZone";

export const LandingPage = () => {
  return (
    <div className="flex min-h-screen w-full">
      <SplitZone type="designer" />
      <SplitZone type="client" />
    </div>
  );
};
