export type PropsStack = {
  StackCadastroLocal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PropsStack {}
  }
}
