'use client'
import { TotalsGroupSpending } from '@/app/groups/[groupId]/stats/totals-group-spending'
import { TotalsYourShare } from '@/app/groups/[groupId]/stats/totals-your-share'
import { TotalsYourSpendings } from '@/app/groups/[groupId]/stats/totals-your-spending'
import { getGroup, getGroupExpenses } from '@/lib/api'
import { useActiveUser } from '@/lib/hooks'
import { getPrisma } from '@/lib/prisma'
import { useEffect } from 'react'

export function Totals({
  group,
  expenses,
  totalGroupSpendings,
}: {
  group: NonNullable<Awaited<ReturnType<typeof getGroup>>>
  expenses: NonNullable<Awaited<ReturnType<typeof getGroupExpenses>>>
  totalGroupSpendings: number
}) {
  const activeUser = useActiveUser(group.id)
  console.log('activeUser', activeUser)

  const handleChange = async () => {
    try {
      const response = await fetch('/api/updateGroup', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ groupId: group.id, totalGroupSpendings }),
      });
  
      if (response.ok) {
        const updatedGroup = await response.json();
        console.log('Updated group:', updatedGroup);
      } else {
        console.error('Failed to update group');
      }
    } catch (error) {
      console.error('Error updating group:', error);
    }
  };
  
  useEffect(() => {
    handleChange();
  }, []);
  

  return (
    <>
      <TotalsGroupSpending
        totalGroupSpendings={totalGroupSpendings}
        currency={group.currency}
      />
      {activeUser && activeUser !== 'None' && (
        <>
          <TotalsYourSpendings group={group} expenses={expenses} />
          <TotalsYourShare group={group} expenses={expenses} />
        </>
      )}
    </>
  )
}
