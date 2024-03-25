```javascript
/**
 * {
 *      email: string
 *      password: atleast 8 characters
 *      country: "IN" or "US"
 * }
 */

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8, 'Password must be 8 character'),
  country: zod.literal('IN').or(zod.literal('US')),
});
```
