
import {usePermissions} from "./permissionsContext"
 
export default function AuthorizedContent({ children, allowedRoles }) {
  const { role } = usePermissions();
  const isAuthorized = allowedRoles.includes(role);

  return isAuthorized ? children : null;
}
