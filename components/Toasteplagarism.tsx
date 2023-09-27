import { Button } from "./ui/button"
import { ToastAction } from "./ui/toast"
import { useToast } from "./ui/use-toast"

export const ToastDemo = () => {
    const { toast } = useToast()
  
    return (
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Show Toast
      </Button>
    )
  }
  