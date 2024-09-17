import { MemberGrade, useAuth } from "@/src/providers/AuthProvider";
import React, { useMemo } from "react";

interface PermissionProps {
  permissionList: MemberGrade[];
  children: React.ReactNode;
}

export default function Permission({
  children,
  permissionList,
}: PermissionProps) {
  const { grade } = useAuth();
  const isPermitted = useMemo(
    () => grade && permissionList.includes(grade),
    [grade]
  );

  if (!isPermitted) {
    return;
  }

  return <>{children}</>;
}
