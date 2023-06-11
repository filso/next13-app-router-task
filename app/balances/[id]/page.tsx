import { BalanceExtended, extendBalanceData } from "../util";
import SingleBalancePage from "./SingleBalancePage";

async function getBalanceInfo(id: string): Promise<BalanceExtended> {
  const res = await fetch(`${process.env.BASE_URL}/api/balances/${id}`, {
    cache: "no-store",
  });

  return extendBalanceData(await res.json());
}

export default async function Balance({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getBalanceInfo(id);

  return <SingleBalancePage data={data} />;
}
