import ShowClassCard from "@/components/ui/showclassCard";

export default function MemberCard({ user }) {
  return (
    <div className="w-full px-4 py-6">
          <ul className="space-y-3">
            {user.classes?.length ? (
              user.classes.map(cls => (
                <li key={cls.id} className="p-4 text-background rounded-xl border border-gray-300">
                  <h2 className="text-md font-semibold mb-2">{cls.className}</h2>
                  <div>
                    <p className="text-xs"><span className="capitalize">{cls.classDay}</span> - <span>kl. {cls.classTime}</span></p>
                  </div>
                  <ShowClassCard userId={user.id} classId={cls.id} />
                </li>
              ))
            ) : (
              <li>No classes available</li>
            )}
          </ul>
      </div>
  );

}