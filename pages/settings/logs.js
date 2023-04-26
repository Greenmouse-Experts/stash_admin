import React from 'react'
import Layout from '@/components/layout/Layout'
import LogsTable from '@/components/logs/table/LogsTable';

const LogsPage = () => {
  return (
    <Layout>
        <div className='w-full'>
            <div className='text-3xl fw-600'>Logs</div>
            <div className='mt-12'>
                <div className='p-5 bg-white shadow'>
                    <LogsTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default LogsPage