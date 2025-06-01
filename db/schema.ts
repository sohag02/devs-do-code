import { pgTable, serial, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

const roleEnum = pgEnum("role", ["user", "assistant", "system", "data"]);

export const Chats = pgTable("chats", {
  id: varchar("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const Messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  chatId: varchar("chat_id")
    .references(() => Chats.id)
    .notNull(),
  role: roleEnum("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const FavoriteVoices = pgTable("favorite_voices", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  voiceId: varchar("voice_id").notNull(),
  createdAt: timestamp("created_at", { mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// RELATIONS --------------

export const ChatsRelations = relations(Chats, ({ many }) => ({
  messages: many(Messages),
}));

export const MessagesRelations = relations(Messages, ({ one }) => ({
  chat: one(Chats, {
    fields: [Messages.chatId],
    references: [Chats.id],
  }),
}));