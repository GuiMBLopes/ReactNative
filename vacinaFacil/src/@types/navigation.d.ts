export type PropsStack = {
  Home: undefined;
  StackCadastroLocal: undefined;
  StcakCadastroUser:undefined
};

export type PropsTab = {
  TabsHome: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PropsStack {}
    interface RootParamList extends PropsTab {}
  }
}
