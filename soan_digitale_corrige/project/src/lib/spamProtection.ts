/**
 * Protection anti-spam légère côté client.
 * Le champ honeypot doit rester invisible pour les visiteurs.
 */
export function isSpamSubmission(value: string | null | undefined): boolean {
  return Boolean(value?.trim());
}
