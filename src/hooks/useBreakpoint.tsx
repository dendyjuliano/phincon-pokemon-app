import { Grid } from "antd";

type useBreakpointProps = {
  isDekstop: boolean;
};

export default function useBreakpoint(): useBreakpointProps {
  const { useBreakpoint: useBreakpointAntd } = Grid;
  const { md: isDekstop } = useBreakpointAntd();

  return {
    isDekstop: !!isDekstop,
  };
}
