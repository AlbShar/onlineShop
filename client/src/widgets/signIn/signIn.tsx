import { Button } from "~/shared/ui/atoms/button";
import { Menu } from "~/shared/ui/atoms/menu";
import { Basket } from "~/shared/ui/atoms/basket";
import { RadioButtonsGroup } from "~/shared/ui/molecules/RadioButtonsGroup/RadioButtonsGroup";

export const SignIn = () => {
  const buttons = ["Dog", "Cat", "Elephant"];
    return (
      <>
        <Button>Подробнее</Button>
        <Menu />
        <Basket />
        <RadioButtonsGroup text="Крем" direction="column" buttons={buttons} />
      </>
    );
};

