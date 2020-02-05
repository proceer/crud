export interface DataDestinationAdapter {
  saveById(id: string, value: any, isNew?: boolean): Promise<any | undefined>;
}
