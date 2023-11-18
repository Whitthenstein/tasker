import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { db } from "@/lib/db";
import { getValidUserNameIdentifier } from "./utils";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found!");
    }
    if (!orgId) {
      throw new Error("Organization not found!");
    }

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: user.id,
        userImage: user?.imageUrl,
        userName: getValidUserNameIdentifier(user),
      },
    });
  } catch (error) {
    console.log("[AUDIT_LOG_ERROR]", error);
  }
};
