'use client';
import { Box, Container, Typography, Divider, Button } from '@mui/material';
import { SchoolItem } from '../../i18n/types';
import { useRouter } from 'next/navigation';

export default function SchoolDetailView({
  data,
}: {
  data: SchoolItem;
}) {
  const router = useRouter();
  return (
    <Box>
      {/* 顶部 Banner */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 220, md: 360 },
          backgroundImage: `url(${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 内容区 */}
      <Container maxWidth="md" sx={{ mt: -6, mb: 6 }}>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 3,
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
            p: { xs: 3, md: 4 },
          }}
        >
          {/* 标题 */}
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
          >
            {data.name}
          </Typography>

          {/* 分割线 */}
          <Divider sx={{ mb: 2 }} />

          {/* 简介 */}
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {data.desc}
          </Typography>

          {/* 可扩展信息区 */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: '#f7f9fc',
                borderRadius: 2,
              }}
            >
              <Typography fontWeight={600} gutterBottom>
                学校类型
              </Typography>
              <Typography variant="body2" color="text.secondary">
                国际高等教育机构
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2,
                backgroundColor: '#f7f9fc',
                borderRadius: 2,
              }}
            >
              <Typography fontWeight={600} gutterBottom>
                推荐人群
              </Typography>
              <Typography variant="body2" color="text.secondary">
                有明确海外升学目标的学生
              </Typography>
            </Box>
          </Box>

          

          {/* 操作按钮 */}
          <Box sx={{ textAlign: 'center' }}>
          {/* 🔙 返回按钮 */}
          <Button
            size="small"
            variant="contained"
            onClick={() => router.back()}
            sx={{ mb: 2 }}
          >
            ← 返回学校列表
          </Button>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}
