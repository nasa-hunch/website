import { PrismaClient } from '@prisma/client';
import { ITXClientDenyList } from '@prisma/client/runtime/library';

export type PrismaTransactionClient = Omit<PrismaClient, ITXClientDenyList>;
