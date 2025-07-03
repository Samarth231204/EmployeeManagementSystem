import React from 'react'

const LandingPage = ({ onGoToLogin }) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#1c1c1c] via-emerald-900 to-[#1c1c1c] flex items-center justify-center relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative z-10 text-center max-w-4xl mx-auto px-6'>
        {/* Hero Section */}
        <div className='mb-12'>
          <div className='w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8'>
            <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
          </div>
          
          <h1 className='text-6xl font-bold text-white mb-6 leading-tight'>
            Employee Management
            <span className='block text-emerald-400'>System</span>
          </h1>
          
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Streamline your team's productivity with our comprehensive task management platform. 
            Assign tasks, track progress, and manage your workforce efficiently.
          </p>
        </div>

        {/* Features Section */}
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-[#1c1c1c] border border-emerald-500 rounded-xl p-6'>
            <div className='w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-white mb-2'>Task Management</h3>
            <p className='text-gray-400 text-sm'>Create, assign, and track tasks with ease</p>
          </div>

          <div className='bg-[#1c1c1c] border border-emerald-500 rounded-xl p-6'>
            <div className='w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-white mb-2'>Progress Tracking</h3>
            <p className='text-gray-400 text-sm'>Monitor task completion and team performance</p>
          </div>

          <div className='bg-[#1c1c1c] border border-emerald-500 rounded-xl p-6'>
            <div className='w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-white mb-2'>Team Collaboration</h3>
            <p className='text-gray-400 text-sm'>Foster teamwork and improve communication</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className='space-y-6'>
          <button 
            onClick={onGoToLogin}
            className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#1c1c1c] shadow-lg text-lg'
          >
            Get Started - Login Now
          </button>
          
          <p className='text-gray-400 text-sm'>
            Join thousands of teams already using our platform
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage 