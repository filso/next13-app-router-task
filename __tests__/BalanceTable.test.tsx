import { render, screen } from '@testing-library/react';
import BalanceTable from '@/app/balances/BalanceTable';

import mockData from './table-data.mock.json';
import { BalanceTableRow } from '@/app/balances/util';

describe("BalanceTable", () => {
  it('should render without crashing', async () => {
    render(
        <BalanceTable data={mockData as BalanceTableRow[]} />
    );
    // await screen.findByRole('heading');
    // expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
