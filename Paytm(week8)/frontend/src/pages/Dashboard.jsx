import { Balance, Users, Appbar } from '../components';

function Dashboard() {
  return (
    <div>
      <Appbar />
      <div className='m-8'>
        <Balance value={'10,000'} />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
