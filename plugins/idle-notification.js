export const IdleNotification = async ({
    project,
    client,
    $,
    directory,
    worktree
}) => {
    return {
        event: async ({
            event
        }) => {
            if (event.type === "session.idle") {

                try {

                    const message = '✅ Agent has finished working!';

                    // Show Toast
                    if (typeof client?.tui?.showToast === 'function') {
                        await client.tui.showToast({
                            body: {
                                message: message,
                                variant: "success",
                                duration: 5000
                            }
                        });
                    }

                    // Show Notification
                    await $`powershell.exe -Command "[reflection.assembly]::LoadWithPartialName('System.Windows.Forms') | Out-Null; \$notify = New-Object System.Windows.Forms.NotifyIcon; \$notify.Icon = [System.Drawing.SystemIcons]::Information; \$notify.Visible = \$true; \$notify.ShowBalloonTip(10000, 'OpenCode', '${message.replace(/'/g, "''")}', [System.Windows.Forms.ToolTipIcon]::Info)"`;

                } catch (e) {}

            }
        },
    }
}