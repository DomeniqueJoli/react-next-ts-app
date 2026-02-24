import { ImageResponse } from 'next/og';
import { Flower2 } from 'lucide-react';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          color: '#ec4899', // Pink to match the bloom vibe
        }}
      >
        <Flower2 size={24} strokeWidth={2.5} />
      </div>
    ),
    {
      ...size,
    }
  );
}
